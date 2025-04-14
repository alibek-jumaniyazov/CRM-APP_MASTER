export default function calculateAge(birthdayString) {
  // Tug'ilgan sanani "YYYY-MM-DD" formatida olish
  const birthday = new Date(birthdayString);
  // Hozirgi vaqtni olish
  const today = new Date();
  // Yoshni hisoblash
  let age = today.getFullYear() - birthday.getFullYear();
  // Agar tug'ilgan kun hali bu yil nishonlanmagan bo'lsa, yoshni 1 yil kamaytiramiz
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }
  return age;
}
