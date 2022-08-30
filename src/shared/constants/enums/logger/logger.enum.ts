//ACTION OPTIONS
  enum Levels {
    FATAL = 'fatal',
    ERROR = 'error',
    WARN = 'warn',
    DEBUG = 'debug',
    INFO = 'info',
    LOG = 'log'
  };

  const colors = {
    gray:30,
    red:31,
    green:32,
    yellow:33,
    blue:34,
    purple:35,
    magenta:36,
    white:37,
    bred:41 ,
  }


enum Colors {
    FATAL = 'fatal',
    ERROR = 'error',
    WARN = 'warn',
    DEBUG = 'debug',
    INFO = 'info',
    LOG = 'log'
  };


  export const loggerConfig = {
    Levels,
    colors
  }
