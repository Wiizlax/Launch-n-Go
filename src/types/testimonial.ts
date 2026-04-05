export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  avatarAlt: string
  rating: 1 | 2 | 3 | 4 | 5
  content: string
}
