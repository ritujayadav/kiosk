function showDoctors() {

    let city = document.getElementById("city").value;

    let text = "";

    switch (city.toLowerCase()) {

        case "delhi":

            text = `
          <h4>Delhi</h4> 
          <p>Dr. Sanjay Gupta</p>
          <p>Dr. Pankaj Mathur</p>  
          <p>Dr. Anjali Dutta</p>`;

            break;

        case "mumbai":

            text = `
          <h4>Mumbai</h4>
          <p>Dr. Rohan Shah</p>
          <p>Dr. Anuja Joshi</p>
          <p>Dr. Sriram Iyer</p>`;

            break;
        case "puri":

            text = `
          <h4>Puri</h4>
          <p>Dr. Rohan Shah</p>
          <p>Dr. Anuja Joshi</p>
          <p>Dr. Sriram Iyer</p>`;

            break;

        default:

            const doctors = [
               "Dr. Priya Sharma, MD",
"Dr. Arvind Iyer, MD",
"Dr. Rahul Gupta, MD",
"Dr. Shruti Mehta, MD",
"Dr. Anil Kumar, MD",
"Savita Patel, MBBS, MSTOM",
"Meera Desai, MBBS",
"Ramesh Prasad, MBBS, DiplAc, MA, MSAc",
"Vijay Chaturvedi, MBBS",
"Sunita Kaur, MBBS, MSTOM, PsyD",
"Ajay Khanna, MSTOM, MBBS",
"Ritika Rao, MBBS",
"Rohit Menon, MBBS, DACM",
"Aditi Singh, MBBS",
"Ravi Bhattacharya, DiplAc, MBBS",
"Neha Aggarwal, MBBS",
"Sunita Patel, MBBS, MSTOM",
"Sanjana Joshi, MBBS",
"Dr. Mohan Reddy, MBBS, PhD",
"Dr. Mohan Reddy, MBBS, PhD",
"Dr. Nikhil Kapoor, DC, MBBS, DiplAc",
"Rajeev Bansal, MBBS, DACM",
"Anjali Verma, MBBS",
"Geeta Nair, MBBS",
"Rakesh Nanda, MBBS",
"Sunita Patel, MBBS, MSTOM",
"Geeta Nair, MBBS",
"Rakesh Nanda, MBBS",
"Dr. Abhishek Bhatia, PhD",
"Divya Malhotra, MBBS, DACM",
"Sachin Mehta, MBBS",
"Pooja Kapoor, MSTOM, MBBS",
"Dhruv Patel, MBBS",
"Manisha Chauhan, MBBS",
"Harish Kumar, MBBS, LMT",
"Alok Sharma, MBBS",
"Anita Rani, MBBS",
"Ravi Menon, MBBS",
"Anjali Rao, MBBS, MSAc",
"Deepak Reddy, MBBS, MS",
"Kavita Desai, MBBS",
"Anil Kumar, MBBS",
"Vikram Kapoor, MBBS",
"Dr. Nikhil Kapoor, DC, MBBS, DiplAc",
"Sarika Gupta, MBBS",
"Ankur Mishra, PT",
"Renuka Nair, DAc, MBBS, LMT",
"Sunita Patel, MBBS, MSTOM",
"Shilpa Mehra, MBBS, DACM",
"Sneha Singh, MBBS",
"Rajeev Menon, MBBS",
"Vishal Gupta, MBBS, DACM, MSTCM",
"Priyanka Desai, MBBS",
"Rohini Nair, MBBS",
"Vidya Bhargav, MBBS",
"Arjun Kumar, MBBS",
"Neha Patel, DAOM, MBBS, MSTOM",
"Arvind Sharma, MBBS, DACM",
"Radha Nair, MBBS",
"Simran Kaur, DACM",
"Divya Mehta, MBBS",
"Vandana Singh, MBBS",
"Meera Patel, DAc, MBBS",
"Anjali Desai, MBBS",
"Dr. Abhishek Reddy, PhD, DC, MBBS",
"Swati Jain, MBBS",
"Karthik Reddy, MBBS",
"Dr. Sunil Gupta, MD, CAc",
"Richa Sharma, MBBS",
"Vandana Singh, MBBS",
"Rajiv Menon, PT",
"Neha Gupta, MBBS",
"Dr. Ajay Verma, MD, MBBS",
"Pooja Patel, MBBS",
"Divya Malhotra, MBBS",
"Ragini Nair, MBBS, DACM",
"Suraj Sharma, MBBS, MSTOM",
"Aarav Gupta, MBBS, MSTOM",
"Deepak Menon, MBBS",
"Dr. Sunil Gupta, MD, CAc",
"Harish Kumar, MBBS, LMT",
"Ragini Nair, MBBS, MSTOM",
"Kalpana Menon, MBBS",
"Rajat Khurana, MBBS",
"Dr. Abhinav Singh, MBBS, PhD",
"Manish Joshi, MBBS",
"Vikram Kapoor, MBBS",
"Suresh Prasad, MBBS",
"Rekha Sharma, MBBS, DACM",
"Anjali Rao, MBBS",
"Shyam Lal, MBBS",
"Rashmi Verma, MBBS",
"Sweta Iyer, MBBS",
"Sunil Gupta, MBBS",
"Dr. Anjali Singh, MD",
"Akhil Reddy, MBBS, MSTOM",
"Rajiv Menon, MBBS",
"Harish Kumar, MBBS",
"Dr. Rohit Singh, DC, MBBS",
"Rajeev Nair, MD",
"Anita Gupta, MBBS",
"Dr. Sunil Verma, MD",
"Dr. Sunil Verma, MD",
"Dr. Kiran Kumar, DC, CDN, CNS",
"Manoj Gupta, MBBS",
"Divya Mehta, MBBS",
"Neha Sharma, MBBS",
"Dr. Ajay Verma, MD, MBBS",
"Dr.Gurunathan, MBBS",
"Sunita Patel, MBBS, MSTOM",
"Ravi Menon, MD",
"Harish Kumar, MBBS, MSTOM",
"Neha Sharma, MBBS",
"Rajeev Patel, MBBS",
"Dr. Sebastian Iyer, MD"

            ];

            let randomDocs = [];
            for (let i = 0; i < 3; i++) {
                randomDocs.push(doctors[Math.floor(Math.random() * doctors.length)]);
            }

            text = `<p>${city}</p>
                <p>${randomDocs.join("</p><p>")}</p>`;
    }

    document.getElementById("doctorsList").innerHTML = text;

    setTimeout(() => {
        document.getElementById("doctorsList")
            .classList.add("animate");
    });

}