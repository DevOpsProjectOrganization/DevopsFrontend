import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaseHttpApi } from '../services/baseHttpApi.service';
import {} from 'jasmine';

//Tests are dummies written by chat gpt, they are added for the sake of adding a pipeline step.
describe('BaseHttpApiService', () => {

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  let service: BaseHttpApi<any>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseHttpApi],
    });
    service = TestBed.inject(BaseHttpApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch elements successfully', () => {
    const dummyData = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

    service.getElements().subscribe(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne(service.baseUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyData);
  });

  it('should fetch a single element successfully', () => {
    const dummyElement = { id: 1, name: 'Item 1' };

    service.getElement(1).subscribe(data => {
      expect(data).toEqual(dummyElement);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyElement);
  });
});