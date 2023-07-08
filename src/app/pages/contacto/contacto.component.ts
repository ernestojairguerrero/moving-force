import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  flyer: string = '../../../assets/svg/quienes-somos.svg';

  sericios: any[] = [
    'Transformadores de carga',
    'Distribución de carga',
    'Estiba y desestiba de contenedores',
    'Embalaje para exportación',
    'Emabalaje para industria',
    'Embalaje de maqunaría',
    'Embalaje de bienes en el hogar',
    'lmacenaje logístico',
    'Mudanza residencial y comercial',
    'Transporte de carga',
    'Transporte de carga pesada',
    'Transporte de carga liviana',
    'Otro... cuál?'
  ];

  contactForm!: FormGroup;

  private _fb = inject(FormBuilder);
  private _router = inject(Router);
  // private _getServerError = inject(GetServerError);

  ngOnInit(): void {
    this.initFormRegister();
  }

  initFormRegister(): void {
    this.contactForm = this._fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      origen: new FormControl('', [Validators.required, Validators.minLength(3)]),
      destino: new FormControl('', [Validators.required, Validators.minLength(3)]),
      asunto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  validateForm(): any {
    if (this.contactForm.invalid) {
      return Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  enviarCotizacion(): void {
    this.validateForm();
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // this._router.navigate(['/']);
    }
  }


}
