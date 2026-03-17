import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {

  loading = signal(false);
  error = signal('');
  album = signal<Album | null>(null);
  title11 = signal('');
  success = signal('');

  id = signal(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {

    const idSignal = toSignal(
      this.route.paramMap.pipe(
        map(params => Number(params.get('id')))
      ),
      { initialValue: 0 }
    );

    effect(() => {
      this.id.set(idSignal());
    });

    effect(() => {
      const albumId = this.id();
      if (!albumId) {
        this.error.set('invalid album id');
        return;
      }
      this.loadAlbum(albumId);
    });
  }

  loadAlbum(id: number) {
    this.loading.set(true);

    this.albumService.getAlbum(id).subscribe({
      next: data => {
        this.album.set(data);
        this.title11.set(data.title);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('failed to load album');
        this.loading.set(false);
      }
    });
  }
  

  save() {
    const current = this.album();
    if (!current) return;

    const updated: Album = { ...current, title: this.title11() };

    this.albumService.updateAlbum(updated).subscribe({
      next: (data) => {
        this.album.set(data);
        this.success.set('album title updated successfully');
      },
      error: () => {
        this.error.set('failed to update album title');
      }
    });
  }

  backToAlbums() {
    this.router.navigate(['/albums']);
  }
}
