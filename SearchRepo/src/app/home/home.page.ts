import { Component } from '@angular/core';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  language: String;
  FindData(key:any) {
    console.log(key.target.value);
    console.log(this.language);

}

}


