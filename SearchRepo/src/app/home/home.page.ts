import { Component } from '@angular/core';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  language: string;

  constructor(
    public ServiceProvider: ServiceService
  ) { }

  public lang: string;
  public key: string;
  
   FindData(key: any) {
    this.key = (key.target.value);
      this.lang = (this.language);

    this.ServiceProvider.searchrepo(this.key, this.lang).subscribe(res => {

      console.log(res);
  });

}

}
