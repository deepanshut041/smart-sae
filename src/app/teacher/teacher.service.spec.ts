import { TeacherService } from "./teacher.service";
import { TestBed } from "@angular/core/testing";

describe("TeacherService", () => {

  let service: TeacherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeacherService
      ]
    });
    service = TestBed.get(TeacherService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
