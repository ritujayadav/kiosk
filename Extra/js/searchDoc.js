function searchDoctors() {
    const cityInput = document.getElementById("cityInput").value;

    let doctorLocations;

    if (cityInput.toLowerCase() === "bhubaneswar") {
        doctorLocations = [
            { name: "Dr. P. K. Jena", lat: 20.2961 + 0.002, lng: 85.8245 + 0.002 }, // NE
            { name: "Dr. Susanta Mishra", lat: 20.2984 + 0.001, lng: 85.8213 - 0.002 }, // NW
            { name: "Dr. Bijoy Kumar Patra", lat: 20.3053 - 0.002, lng: 85.8186 + 0.002 }, // SE
            { name: "Dr. B. P. Sahu", lat: 20.3135 - 0.001, lng: 85.8150 - 0.002 }, // SW
            { name: "Dr. S. K. Dash", lat: 20.3204 + 0.002, lng: 85.8127 + 0.001 }, // N
            { name: "Dr. Manoj Kumar Mohapatra", lat: 20.3271 - 0.001, lng: 85.8093 - 0.002 }, // S
            { name: "Dr. Chittaranjan Mohanty", lat: 20.3315 + 0.002, lng: 85.8042 - 0.001 }, // NE
            { name: "Dr. K. C. Behera", lat: 20.3386 - 0.002, lng: 85.7990 + 0.002 }, // SE
            { name: "Dr. R. K. Sahoo", lat: 20.3461 + 0.001, lng: 85.7956 - 0.001 }, // NW
            { name: "Dr. Tapas Kumar Mishra", lat: 20.3512 - 0.002, lng: 85.7908 + 0.001 } // SW
        ];
    } else if (cityInput.toLowerCase() === "chennai") {
        doctorLocations = [
            { name: "Dr. Suresh Kumar", lat: 13.0827 + 0.002, lng: 80.2707 + 0.002 }, // NE
            { name: "Dr. K. S. Sundaram", lat: 13.0683 + 0.001, lng: 80.2704 - 0.002 }, // NW
            { name: "Dr. L. S. Rathnam", lat: 13.0500 - 0.002, lng: 80.2400 + 0.002 }, // SE
            { name: "Dr. M. S. Ramachandran", lat: 13.0427 - 0.001, lng: 80.2176 - 0.002 }, // SW
            { name: "Dr. Aravind Chandrasekar", lat: 13.0568 + 0.002, lng: 80.2575 + 0.001 }, // N
            { name: "Dr. V. Mohan", lat: 13.0674 - 0.001, lng: 80.2635 - 0.002 }, // S
            { name: "Dr. Devi Shetty", lat: 13.0777 + 0.002, lng: 80.2743 - 0.001 }, // NE
            { name: "Dr. C. Ramasubramanian", lat: 13.0821 - 0.002, lng: 80.2822 + 0.002 }, // SE
            { name: "Dr. A. K. Venkatesan", lat: 13.0893 + 0.001, lng: 80.2809 - 0.001 }, // NW
            { name: "Dr. S. Kalyanaraman", lat: 13.1020 - 0.002, lng: 80.2916 + 0.001 } // SW
        ];
    } else if (cityInput.toLowerCase() === "bangalore") {
        doctorLocations = [
            { name: "Dr. Devi Prasad Shetty", lat: 12.9716 + 0.002, lng: 77.5946 + 0.002 }, // NE
            { name: "Dr. Vivek Jawali", lat: 12.9710 + 0.001, lng: 77.5860 - 0.002 }, // NW
            { name: "Dr. Ashok Seth", lat: 12.9653 - 0.002, lng: 77.6086 + 0.002 }, // SE
            { name: "Dr. C. N. Manjunath", lat: 12.9600 - 0.001, lng: 77.6014 - 0.002 }, // SW
            { name: "Dr. Shanthala Thuppanna", lat: 12.9523 + 0.002, lng: 77.5980 + 0.001 }, // N
            { name: "Dr. K. S. Satish", lat: 12.9450 - 0.001, lng: 77.5901 - 0.002 }, // S
            { name: "Dr. Aruna Muralidhar", lat: 12.9333 + 0.002, lng: 77.5802 - 0.001 }, // NE
            { name: "Dr. Kiran Kumar", lat: 12.9275 - 0.002, lng: 77.5739 + 0.002 }, // SE
            { name: "Dr. Ajay Kumar", lat: 12.9207 + 0.001, lng: 77.5671 - 0.001 }, // NW
            { name: "Dr. Raghu J", lat: 12.9139 - 0.002, lng: 77.5608 + 0.001 } // SW
        ];
    } else if (cityInput.toLowerCase() === "hyderabad") {
        doctorLocations = [
            { name: "Dr. T. Subramanyam", lat: 17.3850 + 0.002, lng: 78.4867 + 0.002 }, // NE
            { name: "Dr. K. Nageswar Rao", lat: 17.3948 + 0.001, lng: 78.4890 - 0.002 }, // NW
            { name: "Dr. S. Bhasker Reddy", lat: 17.4006 - 0.002, lng: 78.4862 + 0.002 }, // SE
            { name: "Dr. Praveen Reddy", lat: 17.4083 - 0.001, lng: 78.4905 - 0.002 }, // SW
            { name: "Dr. G. Srinivas", lat: 17.4161 + 0.002, lng: 78.4919 + 0.001 }, // N
            { name: "Dr. M. Naresh Kumar", lat: 17.4217 - 0.001, lng: 78.4953 - 0.002 }, // S
            { name: "Dr. R. Manjula", lat: 17.4282 + 0.002, lng: 78.4987 - 0.001 }, // NE
            { name: "Dr. P. Prasad Reddy", lat: 17.4339 - 0.002, lng: 78.5015 + 0.002 }, // SE
            { name: "Dr. R. Chandrasekar", lat: 17.4385 + 0.001, lng: 78.5039 - 0.001 }, // NW
            { name: "Dr. N. Suresh", lat: 17.4440 - 0.002, lng: 78.5062 + 0.001 } // SW
        ];
    } else if (cityInput.toLowerCase() === "kolkata") {
        doctorLocations = [
            { name: "Dr. Ashis Mukhopadhyay", lat: 22.5726 + 0.002, lng: 88.3639 + 0.002 }, // NE
            { name: "Dr. Pranab Das", lat: 22.5806 + 0.001, lng: 88.3605 - 0.002 }, // NW
            { name: "Dr. Partho Roy", lat: 22.5887 - 0.002, lng: 88.3683 + 0.002 }, // SE
            { name: "Dr. S. P. Chaudhuri", lat: 22.5958 - 0.001, lng: 88.3706 - 0.002 }, // SW
            { name: "Dr. B. K. Ghosh", lat: 22.6010 + 0.002, lng: 88.3750 + 0.001 }, // N
            { name: "Dr. Anirban Bandyopadhyay", lat: 22.6070 - 0.001, lng: 88.3802 - 0.002 }, // S
            { name: "Dr. S. R. Basu", lat: 22.6142 + 0.002, lng: 88.3828 - 0.001 }, // NE
            { name: "Dr. A. K. Malakar", lat: 22.6204 - 0.002, lng: 88.3880 + 0.002 }, // SE
            { name: "Dr. R. K. Khatun", lat: 22.6268 + 0.001, lng: 88.3901 - 0.001 }, // NW
            { name: "Dr. M. K. Chatterjee", lat: 22.6335 - 0.002, lng: 88.3965 + 0.001 } // SW
        ];
    
} else if (cityInput.toLowerCase() === "pune") {
    doctorLocations = [
        { name: "Dr. A. B. Patil", lat: 18.5204 + 0.002, lng: 73.8567 + 0.002 }, // NE
        { name: "Dr. R. N. Joshi", lat: 18.5184 + 0.001, lng: 73.8547 - 0.002 }, // NW
        { name: "Dr. S. V. Deshmukh", lat: 18.5220 - 0.002, lng: 73.8514 + 0.002 }, // SE
        { name: "Dr. P. V. More", lat: 18.5241 - 0.001, lng: 73.8482 - 0.002 }, // SW
        { name: "Dr. T. K. Kulkarni", lat: 18.5259 + 0.002, lng: 73.8456 + 0.001 }, // N
        { name: "Dr. H. D. Sinha", lat: 18.5276 - 0.001, lng: 73.8431 - 0.002 }, // S
        { name: "Dr. K. S. Bhosale", lat: 18.5301 + 0.002, lng: 73.8400 - 0.001 }, // NE
        { name: "Dr. M. A. Patankar", lat: 18.5328 - 0.002, lng: 73.8375 + 0.002 }, // SE
        { name: "Dr. R. V. Dhake", lat: 18.5350 + 0.001, lng: 73.8351 - 0.001 }, // NW
        { name: "Dr. S. R. Pande", lat: 18.5376 - 0.002, lng: 73.8323 + 0.001 } // SW
    ];
} else if (cityInput.toLowerCase() === "ahmedabad") {
    doctorLocations = [
        { name: "Dr. M. S. Patel", lat: 23.0225 + 0.002, lng: 72.5714 + 0.002 }, // NE
        { name: "Dr. K. D. Mehta", lat: 23.0210 + 0.001, lng: 72.5700 - 0.002 }, // NW
        { name: "Dr. R. N. Shah", lat: 23.0241 - 0.002, lng: 72.5690 + 0.002 }, // SE
        { name: "Dr. P. S. Desai", lat: 23.0255 - 0.001, lng: 72.5680 - 0.002 }, // SW
        { name: "Dr. S. V. Chavda", lat: 23.0273 + 0.002, lng: 72.5665 + 0.001 }, // N
        { name: "Dr. A. R. Joshi", lat: 23.0285 - 0.001, lng: 72.5650 - 0.002 }, // S
        { name: "Dr. K. C. Ghosh", lat: 23.0302 + 0.002, lng: 72.5633 - 0.001 }, // NE
        { name: "Dr. M. R. Trivedi", lat: 23.0325 - 0.002, lng: 72.5610 + 0.002 }, // SE
        { name: "Dr. T. K. Thakkar", lat: 23.0341 + 0.001, lng: 72.5595 - 0.001 }, // NW
        { name: "Dr. R. S. Kachhadiya", lat: 23.0358 - 0.002, lng: 72.5570 + 0.001 } // SW
    ];
} else if (cityInput.toLowerCase() === "mumbai") {
    doctorLocations = [
        { name: "Dr. R. S. Nair", lat: 19.0760 + 0.002, lng: 72.8777 + 0.002 }, // NE
        { name: "Dr. A. M. Khan", lat: 19.0740 + 0.001, lng: 72.8760 - 0.002 }, // NW
        { name: "Dr. P. K. Agarwal", lat: 19.0780 - 0.002, lng: 72.8745 + 0.002 }, // SE
        { name: "Dr. S. D. Desai", lat: 19.0800 - 0.001, lng: 72.8730 - 0.002 }, // SW
        { name: "Dr. T. R. Sharma", lat: 19.0820 + 0.002, lng: 72.8710 + 0.001 }, // N
        { name: "Dr. V. K. Jain", lat: 19.0840 - 0.001, lng: 72.8695 - 0.002 }, // S
        { name: "Dr. M. A. Bhat", lat: 19.0860 + 0.002, lng: 72.8680 - 0.001 }, // NE
        { name: "Dr. S. C. Singhal", lat: 19.0880 - 0.002, lng: 72.8665 + 0.002 }, // SE
        { name: "Dr. N. J. Verma", lat: 19.0900 + 0.001, lng: 72.8650 - 0.001 }, // NW
        { name: "Dr. K. B. Iyer", lat: 19.0920 - 0.002, lng: 72.8635 + 0.001 } // SW
    ];
} else if (cityInput.toLowerCase() === "jaipur") {
    doctorLocations = [
        { name: "Dr. R. K. Sharma", lat: 26.9124 + 0.002, lng: 75.7873 + 0.002 }, // NE
        { name: "Dr. A. P. Agarwal", lat: 26.9110 + 0.001, lng: 75.7860 - 0.002 }, // NW
        { name: "Dr. S. S. Jain", lat: 26.9140 - 0.002, lng: 75.7850 + 0.002 }, // SE
        { name: "Dr. M. K. Mehta", lat: 26.9155 - 0.001, lng: 75.7840 - 0.002 }, // SW
        { name: "Dr. V. J. Kachhadiya", lat: 26.9168 + 0.002, lng: 75.7825 + 0.001 }, // N
        { name: "Dr. T. R. Joshi", lat: 26.9180 - 0.001, lng: 75.7810 - 0.002 }, // S
        { name: "Dr. N. C. Agarwal", lat: 26.9200 + 0.002, lng: 75.7800 - 0.001 }, // NE
        { name: "Dr. S. K. Jha", lat: 26.9225 - 0.002, lng: 75.7785 + 0.002 }, // SE
        { name: "Dr. R. P. Singh", lat: 26.9240 + 0.001, lng: 75.7770 - 0.001 }, // NW
        { name: "Dr. P. R. Mehta", lat: 26.9260 - 0.002, lng: 75.7750 + 0.001 } // SW
    ];
} else if (cityInput.toLowerCase() === "chandigarh") {
    doctorLocations = [
        { name: "Dr. A. K. Bansal", lat: 30.7333 + 0.002, lng: 76.7794 + 0.002 }, // NE
        { name: "Dr. S. P. Gupta", lat: 30.7310 + 0.001, lng: 76.7780 - 0.002 }, // NW
        { name: "Dr. M. K. Bhalla", lat: 30.7350 - 0.002, lng: 76.7765 + 0.002 }, // SE
        { name: "Dr. R. N. Sharma", lat: 30.7365 - 0.001, lng: 76.7750 - 0.002 }, // SW
        { name: "Dr. P. S. Kaur", lat: 30.7378 + 0.002, lng: 76.7735 + 0.001 }, // N
        { name: "Dr. T. R. Bedi", lat: 30.7390 - 0.001, lng: 76.7720 - 0.002 }, // S
        { name: "Dr. N. K. Verma", lat: 30.7400 + 0.002, lng: 76.7705 - 0.001 }, // NE
        { name: "Dr. K. S. Ghosh", lat: 30.7415 - 0.002, lng: 76.7690 + 0.002 }, // SE
        { name: "Dr. J. P. Khurana", lat: 30.7430 + 0.001, lng: 76.7675 - 0.001 }, // NW
        { name: "Dr. M. K. Dutt", lat: 30.7445 - 0.002, lng: 76.7650 + 0.001 } // SW
    ];
}


else {
        alert(`This List is Not Updated for ${cityInput}  City.`);

    }

    const locationInfo = document.getElementById("locationInfo");
    locationInfo.textContent = cityInput;

    const mapContainer = document.getElementById("map");

    const map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    if (doctorLocations.length > 0) {

        const bounds = doctorLocations.reduce((bounds, loc) => {
            return bounds.extend([loc.lat, loc.lng]);
        }, new L.LatLngBounds());

        map.fitBounds(bounds);

        doctorLocations.forEach(location => {
            L.marker([location.lat, location.lng])
                .addTo(map)
                .bindPopup(location.name);
        });

    } else {
        alert("No locations found");
    }
}