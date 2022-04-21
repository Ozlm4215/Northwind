import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private productService:ProductService,
    private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({ // form içeriği
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

addProduct()
{
  if(this.productAddForm.valid)
  {
    let productModal = Object.assign({},this.productAddForm.value) // forma girilen bilgileri istenilen obje haline getiriyor.
    this.productService.addProduct(productModal).subscribe(response=>
      {
        this.toastrService.success(response.message, "Ürün eklendi!")
      },responseError =>
      {
        if(responseError.error.Errors.length> 0)
        {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      });
  }
  else{
this.toastrService.error("Formunuz eksik lütfen doldurunuz!")
  }
}

}
