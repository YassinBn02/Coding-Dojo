import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  data:any
  item:any
  constructor(private router:Router ,private apiService:ApiService){
    const navigation=this.router.getCurrentNavigation()
    this.data=navigation?.extras?.state?.['data'] || {}
  }
  ngOnInit():void{
    this.apiService.getOne(this.data.id,this.data.search).subscribe({
      next: (data)=>this.item=data,
      error:(err)=>console.error(err),
      complete:()=>console.info('complete')
    })
  }
}