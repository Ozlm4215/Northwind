import { Category } from './category';
import { ResponseModel } from './responseModel';

export interface CategoryResponseModel extends ResponseModel { //Gelen datayı modellemeye yarıyor.
data:Category[];
}
