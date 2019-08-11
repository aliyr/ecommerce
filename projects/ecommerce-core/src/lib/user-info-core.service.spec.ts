import { TestBed } from "@angular/core/testing";

import { UserInfoCoreService } from "./user-info-core.service";

describe("UserInfoCoreService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UserInfoCoreService = TestBed.get(UserInfoCoreService);
    expect(service).toBeTruthy();
  });
});
