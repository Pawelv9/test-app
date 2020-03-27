import { LOAD_QUOTES } from '../actions/loadQuotes';
import { createQuote } from '../actions/createQuote';
import io from 'socket.io-client';

const client =  io('https://qrtm1.ifxid.com:8443'); 

const quotesMiddleWare = store => next => action => {
  switch(action.type) {
    case LOAD_QUOTES:
        client.on('quotes', (data) => {              
          store.dispatch(createQuote(data.msg));
          console.log('Tick data', data); 
        } 
        );
        
        client.on('connect', () => {                
          client.emit('subscribe', ['GOLD']);              
        });

      break
    default:
      break
  }
  return next(action)
}

export default quotesMiddleWare