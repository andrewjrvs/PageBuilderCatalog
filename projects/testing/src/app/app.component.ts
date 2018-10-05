import { Component } from '@angular/core';
import { PageBuilderCatalogService } from 'projects/page-builder-catalog/src/public_api';

@Component({
  selector: 'tst-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'testing';

  pageData = [
    {
      title: 'Test Page1',
      id: 'tp1',
      items: [
        { type: 'heading', text: 'Page 1' },
        {
          type: 'group',
          text: 'testing',
          childInstructions: [
            { type: 'debug' },
            { type: 'group'
              , text: 'New SUB group'
              , childInstructions: [
                { type: 'debug' }
              ]}
          ]
        },
        {
          type: 'group',
          text: 'testing',
          childInstructions: [
            { type: 'debug' },
            { type: 'debug' },
            { type: 'debug' }
          ]
        }
      ]
    },
    {
      title: 'Test Page2',
      id: 'tp2',
      items: [
        { type: 'heading', text: 'Page 2' },
        { type: 'paragraph', text: `
          Do you see any Teletubbies in here? Do you see a slender plastic
          tag clipped to my shirt with my name printed on it? Do you see a
          little Asian child with a blank expression on his face sitting
          outside on a mechanical helicopter that shakes when you put
          quarters in it? No? Well, that's what you see at a toy store.
          And you must think you're in a toy store, because you're here
          shopping for an infant named Jeb.
        `},

        { type: 'paragraph', text: `
          The path of the righteous man is beset on all sides by the
          iniquities of the selfish and the tyranny of evil men. Blessed is
          he who, in the name of charity and good will, shepherds the weak
          through the valley of darkness, for he is truly his brother's
          keeper and the finder of lost children. And I will strike down
          upon thee with great vengeance and furious anger those who would
          attempt to poison and destroy My brothers. And you will know My
          name is the Lord when I lay My vengeance upon thee.
        `}
      ]
    }
  ];

  constructor(private bgService: PageBuilderCatalogService) {
    bgService.attach(this.pageData);
  }
}
