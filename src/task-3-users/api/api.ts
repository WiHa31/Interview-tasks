// Мок-эндпоинт /api/users поднят прямо в webpack-dev-server (см. webpack.config.js, setupMiddlewares).
// Он специально нестабилен: ~25% запросов падают с 500, задержка ответа 300-1200мс.
export function getUsers() {
  return fetch("/api/users").then((response) => {
    if (!response.ok) {
      throw new Error(`Users API error: ${response.status}`);
    }
    return response.json();
  });
}
