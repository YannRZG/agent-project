const api_url = import.meta.env.VITE_BACK_API_URL;

const endpoints = {
  // SESSIONS ENDPOINTS
  new_session: {
    method: "GET",
    url: `${api_url}/session/new`,
  },
  session: {
    delete: {
      method: "DELETE",
      url: `${api_url}/session`,
    },
    create: {
      method: "POST",
      url: `${api_url}/session`,
    },
  },
  
  // PASSWORDS ENDPOINTS
  passwords: {
    get: {
      method: "GET",
      url: `${api_url}/passwords`,
    },
    create: {
      method: "POST",
      url: `${api_url}/passwords`,
    },
    show: {
      method: "GET",
      url: `${api_url}/passwords/:token`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/passwords/:token`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/passwords/:token`,
    },
  },

  // USERS BADGES ENDPOINTS
  user_badges: {
    get: {
      method: "GET",
      url: `${api_url}/users/:user_id/badges`,
    },
    create: {
      method: "POST",
      url: `${api_url}/users/:user_id/badges`,
    },
    show: {
      method: "GET",
      url: `${api_url}/users/:user_id/badges/:id`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/users/:user_id/badges/:id`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/users/:user_id/badges/:id`,
    },
  },

  // SHOWRUNNER CONTRACTS ENDPOINTS
  user_showrunner_contracts: {
    get: {
      method: "GET",
      url: `${api_url}/users/:user_id/showrunner_contracts`,
    },
    create: {
      method: "POST",
      url: `${api_url}/users/:user_id/showrunner_contracts`,
    },
    show: {
      method: "GET",
      url: `${api_url}/users/:user_id/showrunner_contracts/:id`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/users/:user_id/showrunner_contracts/:id`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/users/:user_id/showrunner_contracts/:id`,
    },
  },

  // GENERAL USERS ENDPOINTS
  users: {
    get: {
      method: "GET",
      url: `${api_url}/users`,
    },
    create: {
      method: "POST",
      url: `${api_url}/users`,
    },
    show: {
      method: "GET",
      url: `${api_url}/users/:id`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/users/:id`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/users/:id`,
    },
  },

  // BADGES ENDPOINTS
  badges: {
    get: {
      method: "GET",
      url: `${api_url}/badges`,
    },
    create: {
      method: "POST",
      url: `${api_url}/badges`,
    },
    show: {
      method: "GET",
      url: `${api_url}/badges/:id`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/badges/:id`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/badges/:id`,
    },
  },

  // SHOWRUNNER CONTRACTS ENDPOINTS
  showrunner_contracts: {
    get: {
      method: "GET",
      url: `${api_url}/showrunner_contracts`,
    },
    create: {
      method: "POST",
      url: `${api_url}/showrunner_contracts`,
    },
    show: {
      method: "GET",
      url: `${api_url}/showrunner_contracts/:id`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/showrunner_contracts/:id`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/showrunner_contracts/:id`,
    },
  },

  // RARITIES ENDPOINTS
  rarities: {
    get: {
      method: "GET",
      url: `${api_url}/rarities`,
    },
    create: {
      method: "POST",
      url: `${api_url}/rarities`,
    },
    show: {
      method: "GET",
      url: `${api_url}/rarities/:id`,
    },
    update: {
      method: "PATCH",
      url: `${api_url}/rarities/:id`,
    },
    destroy: {
      method: "DELETE",
      url: `${api_url}/rarities/:id`,
    },
  },
};

// création des paramètres de la requête: options et url
export function buildRequestOptions(
  ressource,
  endpoint,
  data = { id: null, body: null, token: null, isFormData: false }
) {
  const { id, body, token, isFormData } = data;
  const endpointConfig = endpoints[endpoint];

  if (!endpointConfig) {
    throw new Error(`Endpoint ${endpoint} non défini`);
  }

  const { method, url } = endpointConfig;
  let requestUrl = url.replace("{ressource}", ressource);
  requestUrl = id ? requestUrl.replace("{id}", id) : requestUrl;

  const options = {
    method: method,
    headers: {},
  };

  if (isFormData) {
    options.body = body;
  } else if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  return { url: requestUrl, options: options };
}
