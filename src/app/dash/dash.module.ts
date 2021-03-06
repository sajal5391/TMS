import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogeffortComponent } from '../logeffort/logeffort.component';

import { DashRoutingModule } from './dash-routing.module'
import { ApprovalComponent } from '../approval/approval.component';

import {
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
import { DashService } from './dash.service';
import { LogeffortService } from '../logeffort/logeffort.service';
import { ChartsModule } from 'ng2-charts';
import { SharedService } from '../shared/shared.service';
import { ApprovalService } from '../approval/approval.service';
import { MyProjectListComponent } from '../my-project-list/my-project-list.component';
import { AboutUsComponent } from '../about-us/about-us.component';
//import { DashResolve } from './dash.resolve.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,
        MatSelectModule,
        MatDialogModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatGridListModule,
        MatSnackBarModule,
        MatTooltipModule,
        ChartsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
        LogeffortComponent,
        ApprovalComponent,
        MyProjectListComponent,
        AboutUsComponent
    ],
    providers: [
        DashService,
        LogeffortService,
        ApprovalService,
        SharedService,
        MatDatepickerModule
    ]
})
export class DashModule { }