import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { Category } from '../../entity/category';
import { CategoryDao } from '../../dao/categoryDao';
import { Toast } from '../../componentesIonic/toast';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  createNewCategoryEnabled: boolean = false;
  typeButtonCategory = "criarCategoria";
  categoryName: string = "";
  categoryList: Array<Category>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translate: TranslateService, private categoryDao: CategoryDao,
    private toast: Toast) {
  }

  ionViewDidLoad() {
    this.categoryDao.findAll(response => {
      this.categoryList = response;
    }, error => {
      this.toast.showToast("Erro ao buscar categorias", Toast.BOTTOM, 4000);
    });
  }

  createNewCategoryItem() {
    if (this.createNewCategoryEnabled) {
      // create new category
      let category = new Category();
      category.$name = this.categoryName;

      // save category in database
      this.categoryDao.save(category, id => {
        this.createNewCategoryEnabled = false;
        category.$id = id;
        this.categoryList.push(category);
        this.toast.showToast("Categoria salva com sucesso", Toast.BOTTOM, 4000);
      }, error => {
        this.toast.showToast("Erro ao criar categoria", Toast.BOTTOM, 4000);
      });

    } else {
      this.createNewCategoryEnabled = true;
    }
  }

}
