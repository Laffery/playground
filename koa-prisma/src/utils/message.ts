type MessageResponse = {
  code?: number;
  message?: string;
  data?: any;
};

export default function message({
  code = 200,
  message = "",
  data,
}: MessageResponse): MessageResponse {
  let response: MessageResponse = {
    code,
    message,
  };

  if (data !== undefined) {
    response.data = data;
  }

  return response;
}
