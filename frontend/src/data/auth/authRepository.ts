import axios from 'axios';

export class AuthRepository {
    private static url = 'https://osdapi.ddns.net';

    signIn = async (username: string, password: string): Promise<Response> => {
        try {
            const response = await axios({
                method: 'POST',
                url: AuthRepository.url + '/api/accounts/login/',
                data: {
                    login: username,
                    password: password,
                },
                validateStatus: (status) => status < 500,
            });
            if (response.status === 200) {
                return {
                    code: '200',
                    message: response.data['token'],
                };
            }
            return {
                code: '500',
                message: 'Incorrect username or password',
            };
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return {
                    code: e.code ?? '400',
                    message: e.message,
                };
            }
            return {
                code: '500',
                message: 'Unable to sign in',
            };
        }
    };
}

interface Response {
    code: string;
    message: string;
}
