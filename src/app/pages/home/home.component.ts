import { Component, OnInit } from '@angular/core';
import {film} from "../../interfaces/film";
import {FilmService} from "../../services/film.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films: film[] = [];
  filteredFilms: film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
      this.filteredFilms = this.films;
    });
  }

  filmDelete(id: string) {
    for (let i = 0; i < this.filteredFilms.length; i++){
      if(this.filteredFilms[i].id == id) {
        this.filteredFilms.splice(i, 1)
      }
    }
  }

  searchFilms(){
    (async () => {
      const { value: filter } = await Swal.fire({
        title: 'What do you want to search?',
        input: 'text',
        inputPlaceholder: 'Your search'
      })
      if (filter) {
        this.filteredFilms=[]
        for (let i = 0; i < this.films.length; i++){
          if(this.films[i].title.toLowerCase().includes(filter.toLowerCase())){
            this.filteredFilms.push(this.films[i])
          }
        }
      }
    })()
  }

  resetSearch() {
    this.filteredFilms=this.films
  }

  createFilm() {
    (async () => {
      const { value: newTitle } = await Swal.fire({
        title: 'Title of the film',
        input: 'text',
        inputPlaceholder: 'Title'
      })

      const { value: newDirector } = await Swal.fire({
        title: 'Director of the film',
        input: 'text',
        inputPlaceholder: 'Director'
      })

      const { value: newOriginal_title } = await Swal.fire({
        title: 'Original title of the film',
        input: 'text',
        inputPlaceholder: 'Original title'
      })

      const { value: newRelease_date } = await Swal.fire({
        title: 'Release date of the film',
        input: 'text',
        inputPlaceholder: 'Release Date'
      })

      const { value: newDescription } = await Swal.fire({
        title: 'Description of the film',
        input: 'text',
        inputPlaceholder: 'Description'
      })

      const { value: newImage } = await Swal.fire({
        title: 'Image url of the film',
        input: 'url',
        inputPlaceholder: 'Image url'
      })

      const { value: newBanner } = await Swal.fire({
        title: 'Banner url of the film',
        input: 'url',
        inputPlaceholder: 'Banner url'
      })

      const { value: newId } = await Swal.fire({
        title: 'Id of the film',
        input: 'text',
        inputPlaceholder: 'ID'
      })

      let newFilm: film = {
        title: newTitle,
        director: newDirector,
        original_title: newOriginal_title,
        release_date: newRelease_date,
        description: newDescription,
        image: newImage,
        movie_banner: newBanner,
        id: newId
      }
      this.filteredFilms.push(newFilm)
    })()
  }
}
