import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})

export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/homepage" component="oae-homepage" />
          <ion-route url="/dashboard" component="oae-dashboard" />
          <ion-route url="/library" component="oae-library" />
          <ion-route url="/groups" component="oae-groups" />
          <ion-route url="/kitchen-sink" component="kitchen-sink" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
