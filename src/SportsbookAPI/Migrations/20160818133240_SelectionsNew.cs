using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsbookAPI.Migrations
{
    public partial class SelectionsNew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Selection_Events_EventId",
                table: "Selection");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Selection",
                table: "Selection");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Selections",
                table: "Selection",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Selections_Events_EventId",
                table: "Selection",
                column: "EventId",
                principalTable: "Events",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.RenameIndex(
                name: "IX_Selection_EventId",
                table: "Selection",
                newName: "IX_Selections_EventId");

            migrationBuilder.RenameTable(
                name: "Selection",
                newName: "Selections");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Selections_Events_EventId",
                table: "Selections");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Selections",
                table: "Selections");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Selection",
                table: "Selections",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Selection_Events_EventId",
                table: "Selections",
                column: "EventId",
                principalTable: "Events",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.RenameIndex(
                name: "IX_Selections_EventId",
                table: "Selections",
                newName: "IX_Selection_EventId");

            migrationBuilder.RenameTable(
                name: "Selections",
                newName: "Selection");
        }
    }
}
