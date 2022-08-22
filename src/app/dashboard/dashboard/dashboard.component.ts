import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCore } from 'src/app/core/store/core.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  auth$ = this.store.select(selectCore);
  displayedColumns: string[] = ['key', 'value'];
  dataSources: any;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.auth$.subscribe(data => {
      if (data.user) {
        console.log(data.user);
        const { user } = data;
        this.dataSources = [
          { key: 'Nombre', value: user.firstName },
          { key: 'Apellido', value: user.lastName },
          { key: 'Edad', value: user.age },
          { key: 'Sexo', value: user.gender },
          { key: 'Fecha de nacimiento ', value: user.birthDate },
          { key: 'Telefono', value: user.phone },
        ];

        if (user.gender == 'female') {
          this.dataSources.push({key: 'Embarazo o lactancia? ', value: user.maternity})
        }
      }
    });
  }


}
