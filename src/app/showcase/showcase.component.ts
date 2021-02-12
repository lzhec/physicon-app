import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/services/app-data.service';
import { Item } from '../shared/item-interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  AllItems: Array<Item>;
  FilteredItems: Array<Item>;
  subjects: Array<string> = ['Все предметы'];
  genres: Array<string> = ['Все жанры'];
  classes: Array<any> = ['Все классы', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  searchString: string = '';
  showBonus: boolean = false;
  sortOptions: Array<SortOption>;

  constructor(public appDataService: AppDataService) {
    appDataService.getItems().subscribe((data) => {
      this.AllItems = data;
      this.FilteredItems = data;
      this.FilteredItems.forEach(item => {
        this.checkMatch(this.subjects, item.subject);
        this.checkMatch(this.genres, item.genre);
      });

      this.sortOptions = [
        {
          key: 'subject',
          mainOption: 'Все предметы',
          options: this.subjects,
        },
        {
          key: 'genre',
          mainOption: 'Все жанры',
          options: this.genres,
        },
        {
          key: 'grade',
          mainOption: 'Все классы',
          options: this.classes,
        },
      ];
    });
  }

  checkMatch(array: Array<string>, item) {
    if (!array.some(i => i == item))
      array.push(item);
  }

  valueToString(str) {
    const arr = str.split(';');
    if (arr.length > 1) {
      return arr[0] + '-' + arr[arr.length - 1] + ' классы';
    }

    return str + ' класс';
  }

  sortByOption() {
    // if (!this.searchString) {
      this.FilteredItems = this.AllItems;
    // }

    this.sortOptions.forEach(i => {
      if (i.mainOption != i.options[0]) {
        this.FilteredItems = this.FilteredItems.filter(p => p[i.key].toLowerCase().indexOf(i.mainOption.toString().toLowerCase()) > -1);
      }
    });

    if (this.searchString) {
      this.search();
    }
  }

  search() {
    if (!this.searchString) {
      this.sortByOption();
    }

    this.FilteredItems = this.FilteredItems.filter(i => {
      for (const key in i) {
        if (i[key].toString().toLowerCase().indexOf(this.searchString) > -1) {
          return i;
        }
      }
    });
  }

  ngOnInit(): void {

  }
}

export interface SortOption {
  key: string;
  mainOption: any;
  options: Array<any>;
}
