import { LoginType } from "../screens/Auth/login/types"
import { AgentPage3 } from "../screens/Auth/register/types";
import axios from "axios"
import { ApiConfig } from "../network/api-config";
import { loginModel } from "../models/login-model";
import { registrationModel } from "../models/registration-model";

abstract class AuthRepository {
  abstract login({email, password}:LoginType): Promise<any>

  abstract register({
    firstname, middlename, lastname, gender, phone, businessAddress, email, password, confirmPassword, lga, state, agentType
  }:AgentPage3): Promise<any>

}

export default class userAuthRepo extends AuthRepository {

  register = async ({firstname, middlename, lastname, gender, phone, businessAddress, email, password, confirmPassword, lga, state, agentType}:AgentPage3): Promise<registrationModel> => {
    try {
      const userMail = await axios.post(ApiConfig.agentRegistration, {firstname, middlename, lastname, gender, phone, businessAddress, email, password, confirmPassword, lga, state, agentType},{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const tokens = await this.login({email, password})
      return {userMail: userMail.data, tokens: tokens.tokens, status: tokens.status}
    } 
    catch (error:any) {
     return {userMail: error.response || error}
    }

  }

  login = async ({email, password}:LoginType): Promise<loginModel> => {
    
    try {
      const data = await axios.post(ApiConfig.login, {email, password},{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return {userMail: email, tokens: data.data, status: data.status}
    } 
    catch (error:any) {
     return {tokens: error.response || error}
    }
  }
}



