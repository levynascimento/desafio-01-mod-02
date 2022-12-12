import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequestHeader {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const userAllList = this.listAllUsersUseCase.execute({
        user_id,
      } as IRequestHeader);

      return response.json(userAllList);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
