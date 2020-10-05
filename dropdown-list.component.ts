import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
      selector: 'app-dropdown-list',
      templateUrl: './dropdown-list.component.html',
      styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {
//public countryValue;

      modalRef: BsModalRef;
      constructor(private modalService: BsModalService, private fb: FormBuilder, private ref: ChangeDetectorRef) { }
      testForm: FormGroup;

      ngOnInit(): void {
            
            this.testForm = this.fb.group({
                  countryData: [''],
                  stateData: [''],
                  cityData: [''],
                  regionData: ['']
            })
      }




      selectedCountry = 0;//country-id=1
      selectedState = 0;//state-id=1
      selectedCity = 0;//state-id=1


      states = [];
      cities = [];
      region = [];


      onSelectCountry(country_id: number) {
            this.selectedCountry = country_id;//1

            /*  this.selectedState = 0;
              this.cities = [];
        */
            this.states = this.getStates().filter((item) => {
                  return item.country_id === Number(country_id)
            });
      }

      //select state dd
      onSelectState(state_id: number) {
            this.selectedState = state_id;
            this.cities = this.getCity().filter((item) => {
                  return item.state_id === Number(state_id)
            });
      }

      //select city dd
      onSelectCity(city_id: number) {
            this.selectedCity = city_id;
            this.region = this.getRegion().filter((item) => {
                  return item.city_id === Number(city_id)
            });
      }


      public country: any =
            [
                  { id: 1, name: 'Country1' },
                  { id: 2, name: 'Country2' },
                  { id: 3, name: 'Country3' }
            ];

      //Data of country
      getCountries() {
            return this.country;
      }


      public state: any = [
            { id: 1, country_id: 1, name: 'State1 of country1' },
            { id: 2, country_id: 1, name: 'State2 of country1' },
            { id: 3, country_id: 2, name: 'State1 of country2' },
            { id: 4, country_id: 2, name: 'State2 of country2' },
            { id: 5, country_id: 3, name: 'State1 of country3' },
            { id: 6, country_id: 3, name: 'State2 of country3' },
      ]

      //Data of states
      getStates() {
            return this.state;
      }


      public city: any = [
            { id: 1, state_id: 1, name: 'City1' },
            { id: 2, state_id: 1, name: 'City11' },
            { id: 3, state_id: 1, name: 'City12' },
            { id: 4, state_id: 1, name: 'City13' },
            { id: 5, state_id: 2, name: 'City14' },
            { id: 6, state_id: 2, name: 'City15' },
            { id: 7, state_id: 2, name: 'City16' },
            { id: 8, state_id: 2, name: 'City17' },
            { id: 9, state_id: 3, name: 'City18' },
            { id: 10, state_id: 3, name: 'City19' },
            { id: 11, state_id: 3, name: 'City20' },
            { id: 12, state_id: 4, name: 'City21' },
            { id: 13, state_id: 4, name: 'City23' },
            { id: 14, state_id: 5, name: 'City24' },
            { id: 15, state_id: 5, name: 'City25' },
            { id: 16, state_id: 5, name: 'City26' },
            { id: 17, state_id: 6, name: 'City27' },
            { id: 18, state_id: 6, name: 'City28' },
      ];

      //Data of city
      getCity() {
            return this.city;
      }


      public regions: any = [
            { id: 1, city_id: 1, name: 'branch1' },
            { id: 2, city_id: 1, name: 'branch1' },
            { id: 3, city_id: 2, name: 'branch3' },
            { id: 4, city_id: 3, name: 'branch4' },
            { id: 5, city_id: 4, name: 'branch5' },
            { id: 6, city_id: 4, name: 'branch6' },
            { id: 7, city_id: 5, name: 'branch7' },
            { id: 8, city_id: 6, name: 'branch8' },
            { id: 9, city_id: 7, name: 'branch9' },
            { id: 10, city_id: 8, name: 'branch10' },
            { id: 11, city_id: 8, name: 'branch11' },
            { id: 12, city_id: 9, name: 'branch12' },
            { id: 13, city_id: 10, name: 'branch13' },
            { id: 14, city_id: 11, name: 'branch14' },
            { id: 15, city_id: 12, name: 'branch15' },
            { id: 16, city_id: 13, name: 'branch16' },
            { id: 17, city_id: 14, name: 'branch17' },
            { id: 18, city_id: 15, name: 'branch18' },
            { id: 19, city_id: 16, name: 'branch19' },
            { id: 20, city_id: 16, name: 'branch20' },
      ];
      //Region of bank
      getRegion() {
            return this.regions;
      }


      //open model
      openModel(form) {
            this.modalRef = this.modalService.show(form);
      }

      //Modal form of Country
      addData(name) {
            // console.log("+"Name:"+name);
            this.country.push({
                  id: this.country.length + 1,//Number(id),
                  name: name
            });
            console.log(this.country);
      }

      //Modal form of State
      addState(name) {

            //You have to add the validation here that if the country not selected the add state is not populate
            if (this.testForm.value.countryData == '') { alert('please select country') }
            const countryId = Number(this.testForm.value.countryData);
            // console.log("Id:"+id+"Name:"+name);
            this.state.push({
                  id: this.states.length + 1,
                  country_id: countryId,
                  name: name
            });
            this.onSelectCountry(countryId);
            console.log(this.state);
      }

      //Modal form of State
      addCity(name) {
         //   console.log("Id:" + id + "Name:" + name);
         if (this.testForm.value.stateData == '') { alert('please select Cities') }
         const stateId = Number(this.testForm.value.stateData);
            this.city.push({
                  id: this.cities.length + 1,
                  state_id: stateId,
                  name: name
            });
            this.onSelectState(stateId)
            console.log(this.city);
      }


      //Modal form of Regions
      addRegions( name) {
           // console.log("Id:" + id + "Name:" + name);
           if (this.testForm.value.cityData == '') { alert('please select Regions') }
           const cityId = Number(this.testForm.value.cityData);
            this.regions.push({
                  id: this.region.length+1,
                  city_id: cityId,
                  name: name
            });
            this.onSelectCity(cityId);
            console.log(this.regions);
      }




      //form Data
      onSubmit() {
            console.log("form data");
            console.log(this.testForm);
           // console.log(this.countryValue);
      }
}
