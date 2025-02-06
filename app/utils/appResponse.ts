import { Response } from "express";

type ResponseParamsType = {
  res: Response;
  data: any;
  message?: string;
  code: number;
  totalResults?: number;
};

const sendSuccessResponse = ({
  res,
  data,
  message,
  code,
  totalResults,
}: ResponseParamsType): void => {
  res.status(code).json({
    status: "success",
    message,
    ...(totalResults && { totalResults }),
    data,
    code,
  });
};

const sendErrorResponse = ({
  res,
  data,
  message,
  code,
}: ResponseParamsType): void => {
  res.status(code).json({
    status: "error",
    message,
    data,
    code,
  });
};

export { sendErrorResponse, sendSuccessResponse };
