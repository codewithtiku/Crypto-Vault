document.addEventListener('DOMContentLoaded', () => {
    // Function to format number with commas as per Indian numeric system
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Get all elements with the class "history-no"
    const historyNos = document.querySelectorAll('.history-no');

    // Loop through each element and set a random number
    historyNos.forEach(element => {
        // Generate a random number between 1000000 and 9999999
        const randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;

        // Generate a random decimal between 0 and 99
        const randomDecimal = Math.floor(Math.random() * 100);

        // Combine the random number and random decimal with 2 decimal points
        const randomValue = `${formatNumber(randomNumber)}.${randomDecimal.toString().padStart(2, '0')}`;

        // Set the random value as the content of the element
        element.innerHTML = randomValue + "<br>" + "Succeeded";
    });
});

function HistoryFunc(){
    if(localStorage.getItem('History')){
        document.querySelector('.history-info').innerHTML = `
        
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-18 18:21:34</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-18 15:38:58</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-18 11:44:02</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-18 06:32:27</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-17 19:12:20</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>

        <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-17 14:10:49</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-17 11:53:14</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-17 09:45:33</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-16 10:03:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-16 07:23:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 23:36:44</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 22:00:03</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 21:03:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 20:44:09</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 20:39:49</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 20:37:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 18:55:43</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 18:47:32</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 18:33:38</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 18:25:27</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 17:38:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 17:03:48</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 16:43:25</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 16:37:08</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 15:56:14</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 14:33:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 14:18:58</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 14:00:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 13:44:23</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 13:15:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 12:29:50</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 11:03:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 10:57:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 10:30:44</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 10:03:31</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 09:42:02</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 09:27:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 08:04:53</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-15 06:48:09</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 23:57:17</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 22:33:56</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 22:12:01</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 21:24:56</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 21:03:39</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 20:30:24</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 20:05:17</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 19:43:46</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 19:12:32</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 18:41:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 18:19:44</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 17:39:01</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 17:13:49</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 16:48:21</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 16:26:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 16:09:45</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 15:30:52</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 14:46:42</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 14:07:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 13:36:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 13:16:23</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 12:49:02</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 12:11:06</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 11:36:52</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 10:35:21</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 10:15:32</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 10:03:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-14 07:23:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 23:36:44</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 22:00:03</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 21:03:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 20:44:09</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 20:39:49</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 20:37:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 18:55:43</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 18:47:32</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 18:33:38</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 18:25:27</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 17:38:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 17:03:48</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 16:43:25</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 16:37:08</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 15:56:14</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 14:33:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 14:18:58</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 14:00:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 13:44:23</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 13:15:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 12:29:50</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 11:03:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 10:57:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 10:30:44</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 10:03:31</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 09:42:02</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 09:27:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 08:04:53</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-13 06:48:09</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 23:57:17</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 22:33:56</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 22:12:01</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 21:24:56</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 21:03:39</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 20:30:24</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 20:05:17</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 19:43:46</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 19:12:32</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 18:41:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 18:19:44</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 17:39:01</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 17:13:49</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 16:48:21</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 16:26:37</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 16:09:45</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 15:30:52</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 14:46:42</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 14:07:12</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 13:36:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 13:16:23</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 12:49:02</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 12:11:06</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 11:36:52</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 10:35:21</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 10:15:32</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 10:03:07</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 07:23:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>
    <div class="usdt">
        <h4>USDT <br>
            <p>2024-03-12 07:23:57</p>
        </h4>
        <h4 class="my-1 history-no"></h4>
    </div>`;
    }
    else{
        document.querySelector('.history-info').innerHTML = "";
    }
}
HistoryFunc()
