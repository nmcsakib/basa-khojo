'use client'; 
import { useEffect, useState } from 'react';
interface Location {
    id: string
    bn_name: string
    name: string
}

export default function Dropdown({setLocation, uni} : DropdownProp) {
    const [divisions, setDivisions] = useState<Location[]>([]);
    const [divisionId, setDivisionId] = useState('');
    const [districts, setDistricts] = useState<Location[]>([]);
    const [districtId, setDistrictId] = useState('');
    const [upazilaId, setUpazilaId] = useState('');
    const [upazilas, setUpazilas] = useState<Location[]>([]);
    const [unionId, setUnionId] = useState('');
    const [universityId, setUniversityId] = useState('');
    const [unions, setUnions] = useState<Location[]>([]);
    const universities = [
  {
    "id": "1",
    "bn_name": "ঢাকা বিশ্ববিদ্যালয়",
    "en_name": "University of Dhaka",
    "short_form": "DU",
    "district": "Dhaka"
  },
  {
    "id": "2",
    "bn_name": "রাজশাহী বিশ্ববিদ্যালয়",
    "en_name": "University of Rajshahi",
    "short_form": "RU",
    "district": "Rajshahi"
  },
  {
    "id": "3",
    "bn_name": "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
    "en_name": "Bangladesh Agricultural University",
    "short_form": "BAU",
    "district": "Mymensingh"
  },
  {
    "id": "4",
    "bn_name": "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়",
    "en_name": "Bangladesh University of Engineering & Technology",
    "short_form": "BUET",
    "district": "Dhaka"
  },
  {
    "id": "5",
    "bn_name": "চট্টগ্রাম বিশ্ববিদ্যালয়",
    "en_name": "University of Chittagong",
    "short_form": "CU",
    "district": "Chattogram"
  },
  {
    "id": "6",
    "bn_name": "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    "en_name": "Jahangirnagar University",
    "short_form": "JU",
    "district": "Dhaka"
  },
  {
    "id": "7",
    "bn_name": "ইসলামী বিশ্ববিদ্যালয়",
    "en_name": "Islamic University, Bangladesh",
    "short_form": "IU",
    "district": "Kushtia"
  },
  {
    "id": "8",
    "bn_name": "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Shahjalal University of Science and Technology",
    "short_form": "SUST",
    "district": "Sylhet"
  },
  {
    "id": "9",
    "bn_name": "খুলনা বিশ্ববিদ্যালয়",
    "en_name": "Khulna University",
    "short_form": "KU",
    "district": "Khulna"
  },
  {
    "id": "12",
    "bn_name": "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস",
    "en_name": "Bangladesh University of Professionals",
    "short_form": "BUP",
    "district": "Dhaka"
  },
  {
    "id": "13",
    "bn_name": "বাংলাদেশ ইউনিভার্সিটি অব টেক্সটাইলস",
    "en_name": "Bangladesh University of Textiles",
    "short_form": "BUTEX",
    "district": "Dhaka"
  },
  {
    "id": "14",
    "bn_name": "মিলিটারি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি",
    "en_name": "Military Institute of Science and Technology",
    "short_form": "MIST",
    "district": "Dhaka"
  },
  {
    "id": "17",
    "bn_name": "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Hajee Mohammad Danesh Science & Technology University",
    "short_form": "HSTU",
    "district": "Dinajpur"
  },
  {
    "id": "18",
    "bn_name": "মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Mawlana Bhashani Science and Technology University",
    "short_form": "MBSTU",
    "district": "Tangail"
  },
  {
    "id": "19",
    "bn_name": "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Patuakhali Science and Technology University",
    "short_form": "PSTU",
    "district": "Patuakhali"
  },
  {
    "id": "20",
    "bn_name": "শের-ই-বাংলা কৃষি বিশ্ববিদ্যালয়",
    "en_name": "Sher-e-Bangla Agricultural University",
    "short_form": "SBAU",
    "district": "Dhaka"
  },
  {
    "id": "21",
    "bn_name": "চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Chittagong University of Engineering & Technology",
    "short_form": "CUET",
    "district": "Chittagong"
  },
  {
    "id": "22",
    "bn_name": "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Rajshahi University of Engineering & Technology",
    "short_form": "RUET",
    "district": "Rajshahi"
  },
  {
    "id": "23",
    "bn_name": "ঢাকা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Dhaka University of Engineering & Technology",
    "short_form": "DUET",
    "district": "Gazipur"
  },
  {
    "id": "24",
    "bn_name": "নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Noakhali Science & Technology University",
    "short_form": "NSTU",
    "district": "Noakhali"
  },
  {
    "id": "25",
    "bn_name": "জগন্নাথ বিশ্ববিদ্যালয়",
    "en_name": "Jagannath University",
    "short_form": "JU",
    "district": "Dhaka"
  },
  {
    "id": "26",
    "bn_name": "কুমিল্লা বিশ্ববিদ্যালয়",
    "en_name": "Comilla University",
    "short_form": "CU",
    "district": "Comilla"
  },
  {
    "id": "27",
    "bn_name": "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়",
    "en_name": "Jatiya Kabi Kazi Nazrul Islam University",
    "short_form": "JKKNIU",
    "district": "Mymensingh"
  },
  {
    "id": "28",
    "bn_name": "চট্টগ্রাম পশু ও প্রাণিজ বিজ্ঞান বিশ্ববিদ্যালয়",
    "en_name": "Chittagong Veterinary and Animal Sciences University",
    "short_form": "CVASU",
    "district": "Chittagong"
  },
  {
    "id": "30",
    "bn_name": "বেগম রোকেয়া বিশ্ববিদ্যালয়, রংপুর",
    "en_name": "Begum Rokeya University",
    "short_form": "BRUR",
    "district": "Rangpur"
  },
  {
    "id": "31",
    "bn_name": "পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Pabna University of Science & Technology",
    "short_form": "PUST",
    "district": "Pabna"
  },
  {
    "id": "32",
    "bn_name": "বরিশাল বিশ্ববিদ্যালয়",
    "en_name": "University of Barisal",
    "short_form": "BU",
    "district": "Barisal"
  },
  {
    "id": "34",
    "bn_name": "রাঙ্গামাটি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Rangamati Science and Technology University",
    "short_form": "RMSTU",
    "district": "Rangamati"
  },
  {
    "id": "35",
    "bn_name": "রবীন্দ্র বিশ্ববিদ্যালয়, বাংলাদেশ",
    "en_name": "Rabindra University, Bangladesh",
    "short_form": "RUB",
    "district": "Sirajganj"
  },
  {
    "id": "36",
    "bn_name": "বাংলাদেশ শেখ মুজিবুর রহমান মেরিটাইল বিশ্ববিদ্যালয়",
    "en_name": "Bangabandhu Sheikh Mujibur Rahman Maritime University",
    "short_form": "BMU",
    "district": "Chittagong"
  },
  {
    "id": "37",
    "bn_name": "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
    "short_form": "BSMRSTU",
    "district": "Gopalganj"
  },
  {
    "id": "38",
    "bn_name": "বাংলাদেশ ডিজিটাল বিশ্ববিদ্যালয়",
    "en_name": "Bangabandhu Sheikh Mujibur Rahman Digital University",
    "short_form": "BDU",
    "district": "Gazipur"
  },
  {
    "id": "40",
    "bn_name": "চট্টগ্রাম মেডিকেল বিশ্ববিদ্যালয়",
    "en_name": "Chittagong Medical University",
    "short_form": "CMU",
    "district": "Chittagong"
  },
  {
    "id": "41",
    "bn_name": "রাজশাহী মেডিকেল বিশ্ববিদ্যালয়",
    "en_name": "Rajshahi Medical University",
    "short_form": "RMU",
    "district": "Rajshahi"
  },
  {
    "id": "42",
    "bn_name": "সিলেট মেডিকেল বিশ্ববিদ্যালয়",
    "en_name": "Sylhet Medical University",
    "short_form": "SMU",
    "district": "Sylhet"
  },
  {
    "id": "43",
    "bn_name": "শেখ হাসিনা মেডিকেল বিশ্ববিদ্যালয়, খুলনা",
    "en_name": "Sheikh Hasina Medical University",
    "short_form": "SHMU",
    "district": "Khulna"
  },
  {
    "id": "44",
    "bn_name": "খুলনা কৃষি বিশ্ববিদ্যালয়",
    "en_name": "Khulna Agricultural University",
    "short_form": "KAU",
    "district": "Khulna"
  },
  {
    "id": "45",
    "bn_name": "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিমান গবেষণা ও বিমানচর্চা বিশ্ববিদ্যালয়",
    "en_name": "Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University",
    "short_form": "BSMRAAU",
    "district": "Lalmonirhat"
  },
  {
    "id": "46",
    "bn_name": "হাবিগঞ্জ কৃষি বিশ্ববিদ্যালয়",
    "en_name": "Habiganj Agricultural University",
    "short_form": "HAU",
    "district": "Habiganj"
  },
  {
    "id": "47",
    "bn_name": "চাঁদপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Chandpur Science and Technology University",
    "short_form": "CSTU",
    "district": "Chandpur"
  },
  {
    "id": "48",
    "bn_name": "সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Sunamganj Science and Technology University",
    "short_form": "SSTU",
    "district": "Sunamganj"
  },
  {
    "id": "49",
    "bn_name": "বগুড়া বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Bogura Science and Technology University",
    "short_form": "BSTU",
    "district": "Bogura"
  },
  {
    "id": "50",
    "bn_name": "লক্ষ্মীপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    "en_name": "Lakshmipur Science and Technology University",
    "short_form": "LSTU",
    "district": "Lakshmipur"
  },
  {
    "id": "51",
    "bn_name": "কুড়িগ্রাম কৃষি বিশ্ববিদ্যালয়",
    "en_name": "Kurigram Agricultural University",
    "short_form": "KURIAGRI",
    "district": "Kurigram"
  }
]

    useEffect(() => {
        fetch('https://bdapi.vercel.app/api/v.1/division').then(res => res.json()).then(data => setDivisions(data.data)).catch(err => console.error('Failed to fetch', err));
    }, [])
    useEffect(() => {
        if (!divisionId) return
        fetch(`https://bdapi.vercel.app/api/v.1/district/${divisionId}`).then(res => res.json()).then(data => setDistricts(data.data)).catch(err => console.error('Failed to fetch', err));
    }, [divisionId])
    useEffect(() => {
        if (!districtId) return
        fetch(`https://bdapi.vercel.app/api/v.1/upazilla/${districtId}`).then(res => res.json()).then(data => setUpazilas(data.data)).catch(err => console.error('Failed to fetch', err));
    }, [districtId])
    useEffect(() => {
        if (!upazilaId) return
        fetch(`https://bdapi.vercel.app/api/v.1/union/${upazilaId}`).then(res => res.json()).then(data => setUnions(data.data)).catch(err => console.error('Failed to fetch', err));
    }, [upazilaId])

    return (
          <div className="space-y-4 max-w-md mx-auto p-6 border border-cyan-700 bg-gradient-to-l to-slate-900 from-slate-600 text-slate-300 rounded-xl shadow-md myFont2">
      {/* Division */}
      <select
        className="w-full border border-slate-400 outline-0 p-2 rounded bg-slate-800"
        value={divisionId}
        required
       onChange={(e) => {
    const selectedId = e.target.value;
    setDivisionId(selectedId);

   const selectedDivision = divisions.find(div => div.id === selectedId);
if (selectedDivision) {
  setLocation({ division: selectedDivision.bn_name, div_en: selectedDivision.name });
}
    setUniversityId('')
          setDistrictId('');
          setUpazilaId('');
          setUnionId('');
          setDistricts([]);
          setUpazilas([]);
          setUnions([]);
        }}
      >
        <option value="">বিভাগ নির্বাচন করুন</option>
        {divisions.map((div) => (
          <option key={div.id} label={div.bn_name} value={div.id}>{div.bn_name}</option>
        ))}
      </select>

      {/* District */}
      {districts.length > 0 && (
        <select
          className="w-full border p-2 rounded bg-slate-800 border-slate-400 outline-0"
          value={districtId}
          required
          onChange={(e) => {
              const selectedId = e.target.value;
    setDistrictId(selectedId);

   const selectedDistrict = districts.find(dis => dis.id === selectedId);
if (selectedDistrict) {
  setLocation({ 
    division: divisions.find(d => d.id === divisionId)?.bn_name,
    district: selectedDistrict.bn_name,
    div_en:divisions.find(d => d.id === divisionId)?.name,
    dis_en: selectedDistrict.name
  });
}

            setUpazilaId('');
            setUnionId('');
            setUpazilas([]);
            setUnions([]);
          }}
        >
          <option value="">জেলা নির্বাচন করুন</option>
          {districts.map((dis) => (
            <option key={dis.id} value={dis.id}>{dis.bn_name}</option>
          ))}
        </select>
      )}

      {/* Upazila */}
      {upazilas.length > 0 && (
        <select
          className="w-full border border-slate-400 outline-0 p-2 rounded bg-slate-800"
          value={upazilaId}
          onChange={(e) => {
             const selectedId = e.target.value;
    setUpazilaId(selectedId);

    const selectedUpazilla = upazilas.find(upz => upz.id === selectedId);
if (selectedUpazilla) {
  setLocation({
    division: divisions.find(d => d.id === divisionId)?.bn_name,
    district: districts.find(d => d.id === districtId)?.bn_name,
    upazila: selectedUpazilla.bn_name,
    div_en:divisions.find(d => d.id === divisionId)?.name,
    dis_en:  districts.find(d => d.id === districtId)?.name,
    upa_en: selectedUpazilla.name
  });
}

            setUnionId('');
            setUnions([]);
          }}
        >
          <option value="">উপজেলা নির্বাচন করুন</option>
          {upazilas.map((upz) => (
            <option key={upz.id} value={upz.id}>{upz.bn_name}</option>
          ))}
        </select>
      )}

      {/* Union */}
      {unions.length > 0 && (
        <select
          className="w-full border border-slate-400 outline-0 p-2 rounded bg-slate-800"
          value={unionId}
          onChange={(e) => {
              const selectedId = e.target.value;
    setUnionId(selectedId);

   const selectedUnion = unions.find(u => u.id === selectedId);
if (selectedUnion) {
  setLocation({
    division: divisions.find(d => d.id === divisionId)?.bn_name,
    district: districts.find(d => d.id === districtId)?.bn_name,
    upazila: upazilas.find(u => u.id === upazilaId)?.bn_name,
    union: selectedUnion.bn_name,
    div_en:divisions.find(d => d.id === divisionId)?.name,
    dis_en:  districts.find(d => d.id === districtId)?.name,
    upa_en: upazilas.find(u => u.id === upazilaId)?.name,
    uni_en: selectedUnion.name,
  });
}

          }}
        >
          <option value="">ইউনিয়ন নির্বাচন করুন</option>
          {unions.map((uni) => (
            <option key={uni.id} value={uni.id}>{uni.bn_name}</option>
          ))}
        </select>
      )}

      {
        uni &&  <div>
        <div className='pb-5  my-0 text-center w-full'><span className='tracking-[-2]'>------</span> অথবা <span className='tracking-[-2]'>------</span></div>


       <select
        className="w-full border border-slate-400 outline-0 p-2 rounded bg-slate-800"
        value={universityId}
        onChange={(e) => {
            const selectedId = e.target.value;
    
          setUniversityId(e.target.value);

    const selectedUni = universities.find(uni => uni.id === selectedId);
if (selectedUni) {
  setLocation({ university: selectedUni});
}

    setDivisionId('')
       setDistrictId('');
          setUpazilaId('');
          setUnionId('');
          setDistricts([]);
          setUpazilas([]);
          setUnions([]);
        }}
      >
        <option value="">ইউনিভার্সিটি নির্বাচন করুন</option>
         {universities.map((varsity) => (
            <option key={varsity.id} value={varsity.id}>{varsity.bn_name}</option>
          ))}
      </select>
      </div>
      }
     
    </div>
    );
}
