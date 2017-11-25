import { Component, OnInit } from '@angular/core';
import { IcoService} from '../../service/ico.service';
import { Ico} from '../../service/ico.model';
// import * as moment from 'moment';

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.css'],
  providers: [IcoService]
})
export class IcoComponent implements OnInit {
  Icos: Ico[];
  constructor(private icoService: IcoService) { }

  ngOnInit() {
    this.icoService.getICOs().then((Ico: any) => {
        console.log(Ico);
        if (Ico) {
          this.Icos = Ico.ico.upcoming.map((Ico) => {
            if(!Ico.name) {
              console.log('no icos');
            }
            return Ico;
          })
        }
    });
  }

}
