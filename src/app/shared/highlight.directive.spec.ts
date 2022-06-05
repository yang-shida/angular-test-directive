import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';

@Component({
  template: `
    <h2 highlight="yellow">Something Yellow</h2>
    <h2 highlight>The Default (Gray)</h2>
    <h2>No highlight</h2>
    <input #box [highlight]="box.value" defaultValue="cyan"></input>
  `
})
class TestComponent { }

fdescribe('HighlightDirective', () => {

  beforeEach(() => {
    TestBed.
  });

  // color tests
  it('should have three highlighted elements', () => {
  });

  it('should color 1st <h2> background "yellow"', () => {
  });

  it('should color 2nd <h2> background w/ default color', () => {
  });

  it('should bind <input> background to value color', () => {
  });

  // injected directive
  // attached HighlightDirective can be injected
  it('can inject `HighlightDirective` in 1st <h2>', () => {
  });

  it('cannot inject `HighlightDirective` in 3rd <h2>', () => {
  });

  // DebugElement.providerTokens
  // attached HighlightDirective should be listed in the providerTokens
  it('should have `HighlightDirective` in 1st <h2> providerTokens', () => {
  });

  it('should not have `HighlightDirective` in 3rd <h2> providerTokens', () => {
  });
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/