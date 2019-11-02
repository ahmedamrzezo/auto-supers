import { ClickOutsideDirective } from './click-outside.directive';
import { rendererTypeName } from '@angular/compiler';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
