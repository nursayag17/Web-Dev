import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Router } from '@angular/router'
import { AlbumService } from '../../services/album.service'
import { Album } from '../../models/album'

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = []
  loading = true

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data
      this.loading = false
    })
  }

  openAlbum(id: number) {
    this.router.navigate(['/albums', id])
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(album => album.id !== id);
  }
  

}