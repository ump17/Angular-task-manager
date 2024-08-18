import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
declarations: [ CardComponent],
exports: [CardComponent] // for sharing
})

export class sharedModule{}
