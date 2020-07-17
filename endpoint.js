/*Endpoint */
      const createRoomEndpoint = 'https://create-a-room--kwindla.repl.co';
      let callFrame, callUrl;

      function maybeJoinCall() {
        if (window.location.hash) {
          callUrl = window.location.hash.substring(1);
          startCall();
        }
      }

      async function startCall() {
        if (!callUrl) {
         try {
            let response = await fetch(createRoomEndpoint),
                roomData = await response.json();
            callUrl = roomData.url;
          } catch (e) {
            console.log('fetch failed (retrying in 2s)', e);
            setTimeout(() => startCall(), 2000);
          }
        }

        if (!callFrame) {
          callFrame = window.DailyIframe.createFrame({
              url: callUrl
          });
        }
  
        callFrame.join();
        window.location = '#' + callUrl;

        let button = document.getElementById('start-call-button');
        button.innerHTML = 'end call';
        button.onclick = () => {
          callFrame.leave();
          button.innerHTML = 'start call';
          button.onclick = startCall;
          // window.location.origin is this page's url
          // without the hash fragment
          window.location = window.location.origin
        }
      }
