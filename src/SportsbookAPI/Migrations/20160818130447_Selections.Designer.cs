using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SportsbookAPI.Models;

namespace SportsbookAPI.Migrations
{
    [DbContext(typeof(CouponsContext))]
    [Migration("20160818130447_Selections")]
    partial class Selections
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SportsbookAPI.Models.Coupon", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("SubTitle");

                    b.Property<string>("Title");

                    b.HasKey("id");

                    b.ToTable("Coupons");
                });

            modelBuilder.Entity("SportsbookAPI.Models.Event", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CouponId");

                    b.Property<string>("Name");

                    b.HasKey("id");

                    b.HasIndex("CouponId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("SportsbookAPI.Models.Selection", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EventId");

                    b.Property<string>("Name");

                    b.Property<string>("Price");

                    b.HasKey("id");

                    b.HasIndex("EventId");

                    b.ToTable("Selection");
                });

            modelBuilder.Entity("SportsbookAPI.Models.Event", b =>
                {
                    b.HasOne("SportsbookAPI.Models.Coupon", "Coupon")
                        .WithMany("Events")
                        .HasForeignKey("CouponId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SportsbookAPI.Models.Selection", b =>
                {
                    b.HasOne("SportsbookAPI.Models.Event", "Event")
                        .WithMany("Selections")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
