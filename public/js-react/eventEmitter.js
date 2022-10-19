function eventEmitter() {
  var events = {};
  return {
    subscribe: function subscribe(name, cb) {
      (events[name] || (events[name] = [])).push(cb);
      return {
        unsubscribe: function unsubscribe() {
          events[name] && events[name].splice(events[name].indexOf(cb), 1);
        }
      };
    },
    emit: function emit(name, data) {
      (events[name] || []).forEach(function (fn) {
        return fn(data);
      });
    }
  };
}

var emitter = eventEmitter();

export default function getEmitter() {
  return emitter;
}