import { NgModule } from '@angular/core';

import { MatButtonModule          } from '@angular/material/button';
import { MatInputModule           } from '@angular/material/input';
import { MatExpansionModule       } from '@angular/material/expansion';
import { MatStepperModule         } from '@angular/material/stepper';
import { MatAutocompleteModule    } from '@angular/material';
import { MatSelectModule          } from '@angular/material/select';




const materialCpmponent = [
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [materialCpmponent],
  exports:[materialCpmponent]
})
export class MaterialModule { }
