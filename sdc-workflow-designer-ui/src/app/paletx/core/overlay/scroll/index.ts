/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* tslint:disable:array-type member-access variable-name typedef
 only-arrow-functions directive-class-suffix component-class-suffix
 component-selector*/
import {PlatformModule} from '@angular/cdk';
import {NgModule} from '@angular/core';

import {SCROLL_DISPATCHER_PROVIDER} from './scroll-dispatcher';
import {ScrollStrategyOptions} from './scroll-strategy-options';
import {Scrollable} from './scrollable';

export {BlockScrollStrategy} from './block-scroll-strategy';
export {CloseScrollStrategy} from './close-scroll-strategy';
export {NoopScrollStrategy} from './noop-scroll-strategy';
export {RepositionScrollStrategy} from './reposition-scroll-strategy';
export {ScrollDispatcher} from './scroll-dispatcher';
// Export pre-defined scroll strategies and interface to build custom ones.
export {ScrollStrategy} from './scroll-strategy';
export {ScrollStrategyOptions} from './scroll-strategy-options';
export {Scrollable} from './scrollable';

@NgModule({
  imports: [PlatformModule],
  exports: [Scrollable],
  declarations: [Scrollable],
  providers: [SCROLL_DISPATCHER_PROVIDER, ScrollStrategyOptions],
})
export class ScrollDispatchModule {
}
