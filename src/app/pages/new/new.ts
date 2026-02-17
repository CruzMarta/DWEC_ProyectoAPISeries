import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})

export class NewComponent {
  private seriesService = inject(SeriesService);
  private router = inject(Router);

  // Para definir el formulario y las validaciones
  seriesForm = new FormGroup({
    title: new FormControl('', [
      Validators.required, 
      Validators.minLength(3)
    ]),
    channel: new FormControl('', [
      Validators.required
    ]),
    rating: new FormControl('', [
      Validators.required, 
      Validators.min(0), 
      Validators.max(10)
    ])
  });

  onSubmit() {
    if (this.seriesForm.valid) {
    this.seriesService.create(this.seriesForm.value).subscribe((response) => {
      alert('Serie creada con éxito. ID: ' + response.id);
        //Despues de crearlo vamos a home para ver la lista
        this.router.navigate(['/home']);
      });
    }
  }
}
