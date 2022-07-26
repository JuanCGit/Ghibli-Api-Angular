import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {film} from "../../interfaces/film";
import Swal from "sweetalert2";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film: film = {title: "", original_title: "", image: "", movie_banner: "", description: "", id: "", director: "", release_date:""};
  @Output() filmToDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getDescription() {
      Swal.fire({
        title: this.film.title+' description',
        html: this.film.description,
        imageUrl: this.film.movie_banner
      })
  }

  deleteFilm() {
      this.filmToDelete.emit(this.film.id)
  }

  editFilm(){
      (async () => {
        const { value: title } = await Swal.fire({
          title: 'You are editing ' + this.film.title + ' title',
          input: 'text',
          inputValue: this.film.title
        })
        if (title) {
          this.film.title = title;
        }

        const { value: director } = await Swal.fire({
          title: 'You are editing '+ this.film.title + ' director',
          input: 'text',
          inputValue: this.film.director
        })
        if (director) {
          this.film.director = director;
        }

        const { value: original_title } = await Swal.fire({
          title: 'You are editing '+ this.film.title + ' original title',
          input: 'text',
          inputValue: this.film.original_title
        })
        if (original_title) {
          this.film.original_title = original_title;
        }

        const { value: release_date } = await Swal.fire({
          title: 'You are editing '+ this.film.title+ ' release date',
          input: 'text',
          inputValue: this.film.release_date
        })
        if (release_date) {
          this.film.release_date = release_date;
        }

        const { value: description } = await Swal.fire({
          title: 'You are editing '+ this.film.title+ ' description',
          input: 'text',
          inputValue: this.film.description
        })
        if (description) {
          this.film.description = description;
        }

        const { value: image } = await Swal.fire({
          title: 'You are editing '+ this.film.title + ' image',
          input: 'url',
          inputValue: this.film.image
        })
        if (image) {
          this.film.image = image;
        }

        if(title && release_date && original_title && description && image){
          Swal.fire({
            icon: 'success',
            title: 'Film modified succesfully',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          })
        }else if(!title || !release_date || !original_title || !description || !image){
          Swal.fire({
            icon: 'error',
            title: "You can't leave empty any field",
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: "Something went wrong",
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          })
        }
      })()
    }
}
