import { axiosInstance } from "..";
import { ILandingListingRecentlySoldListResDto, IRecentlySoldReqDto } from "../../../types/DTO/listing";

export default {
  recentlySoldRandon: (params: IRecentlySoldReqDto) =>
    axiosInstance.get<ILandingListingRecentlySoldListResDto>(
      "/api/landing/listing/sold",
      { params }
    ),
};
