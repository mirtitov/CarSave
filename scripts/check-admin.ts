import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function checkAdmin() {
  try {
    console.log('🔍 Checking admin user...')
    
    const admin = await prisma.admin.findUnique({
      where: { email: 'admin@carsave.ru' },
    })

    if (!admin) {
      console.log('❌ Admin not found! Creating admin...')
      
      const hashedPassword = await bcrypt.hash('admin123', 10)
      
      const newAdmin = await prisma.admin.create({
        data: {
          email: 'admin@carsave.ru',
          password: hashedPassword,
          name: 'Администратор',
        },
      })
      
      console.log('✅ Admin created successfully!')
      console.log('Email:', newAdmin.email)
      console.log('ID:', newAdmin.id)
    } else {
      console.log('✅ Admin found!')
      console.log('Email:', admin.email)
      console.log('ID:', admin.id)
      console.log('Name:', admin.name)
      
      // Test password
      const isValid = await bcrypt.compare('admin123', admin.password)
      console.log('Password "admin123" is valid:', isValid)
      
      if (!isValid) {
        console.log('⚠️  Password mismatch! Updating password...')
        const hashedPassword = await bcrypt.hash('admin123', 10)
        await prisma.admin.update({
          where: { id: admin.id },
          data: { password: hashedPassword },
        })
        console.log('✅ Password updated!')
      }
    }
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkAdmin()
