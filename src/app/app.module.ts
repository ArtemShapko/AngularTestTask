import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { LoanComponent } from './loan/loan.component';
import { InvestmentComponent } from './investment/investment.component';

const appRoutes: Routes = [
  { path: '', component: IncomeComponent },
  { path: 'outcome', component: OutcomeComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'investment', component: InvestmentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IncomeComponent,
    OutcomeComponent,
    LoanComponent,
    InvestmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
