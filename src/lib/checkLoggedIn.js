/**
 * 로그인해야만 서비스 사용할 수 있도록 하는 미들웨어
 * 로그인 상태가 아니라면 401 HTTP Status를 반환하게 된다.
 */

const checkLoggedIn = (ctx, next) => {
    if (!ctx.state.user) {
        ctx.status = 401; // Unauthorized
        return;
    }
    return next();
};

export default checkLoggedIn;