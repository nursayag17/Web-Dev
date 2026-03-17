import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, RouterModule, Router } from '@angular/router'
import { AlbumService } from '../../services/album.service'
import { Album } from '../../models/album'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album
  loading = true
  albumId!: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {

    this.albumId = Number(this.route.snapshot.paramMap.get('id'))

    this.albumService.getAlbum(this.albumId).subscribe(data => {

      this.album = data

      this.loading = false

    })
  }

  goBack() {
    this.router.navigate(['/albums'])
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.albumId, 'photos'])
  }

  save() {

    this.albumService.updateAlbum(this.album).subscribe(() => {

      alert('Album updated')

    })
  }
}