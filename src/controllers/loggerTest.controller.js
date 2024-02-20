import { logger } from '../utils/logger.js';

export const loggerTest = (req, res) => {
 
    logger.debug('Message debug');
    logger.http('Message http');
    logger.info('Message info');
    logger.warning('Message warning');
    logger.error('Message error');
    logger.fatal('Message fatal');
  
    res.send('Informacion enviada. Ddetalle de Datos en  "errors.log".');
}