import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryLoaded:boolean=false;
  currentCategory: Category;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categoryLoaded=false;
      this.categories = response.data;
      this.categoryLoaded=true;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrenCategoryClass(category: Category)
  {
    if(category == this.currentCategory)
    {
      return 'list-group-item active'
    }
    else
    {
      return 'list-group-item'
    }
  }

  setAllCategory() {
 this.currentCategory = {categoryId : 0, categoryName :""}
  }

  getAllCategoryClass()
  {
    if(!this.currentCategory){
      return 'list-group-item active'
    }
    else{
      if(this.currentCategory.categoryId > 0)
      {
        return 'list-group-item'
      }
      else
      {
        return 'list-group-item active'
      }
    }
  }
}
