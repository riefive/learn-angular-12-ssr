import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  dangerousUrl: string = '';
  trustedUrl: any;
  numbers: any;

  constructor(private sanitizer: DomSanitizer) {
    this.numbers = of(1, 2, 3); // simple observable that emits three values
  }

  ngOnInit(): void {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.numbers.subscribe({
      next(value: any) { console.log('Observable emitted the next value: ' + value); },
      error(err: any)  { console.error('Observable emitted an error: ' + err); },
      complete()  { console.log('Observable emitted the complete notification'); }
    });
  }
}
